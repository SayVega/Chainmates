<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Str;
use kornrunner\Keccak;
use Elliptic\EC;
use App\Services\Signature;

class WalletLoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'wallet_address' => 'required|string',
            'signature' => 'required|string',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Datos inválidos.'], 422);
        }

        $walletAddress = strtolower($request->wallet_address);
        $signature = $request->signature;
        $message = $request->message;

        if (!$this->isSignatureValid($message, $signature, $walletAddress)) {
            return response()->json(['error' => 'Firma inválida.'], 401);
        }

        $user = User::firstOrCreate(
            ['wallet_address' => $walletAddress],
            [
                'wallet_address' => $walletAddress,
                'name' => 'WalletUser_' . Str::random(6),
                'login_method' => 'wallet',
            ]
        );

        $token = auth('api')->login($user);

        return response()->json([
            'message' => 'Login exitoso',
            'token' => $token,
            'user' => $user,
        ]);
    }

    protected function isSignatureValid($message, $signature, $walletAddress): bool
    {
       try{
        $prefix = "\x19Ethereum Signed Message:\n" . strlen($message) . $message;
        $msgHash = Keccak::hash($prefix, 256);
        
        $sig = Signature::fromHex($signature);

        $r = $sig->getR();
        $s = $sig->getS();
        $v = $sig->getRecoveryParam();

        $ec = new EC('secp256k1');
        $pubKey = $ec->recoverPubKey($msgHash, ['r' => $r, 's' => $s], $v);
        
        $pubKeyHex = $pubKey->encode('hex');
        $pubKeyHash = Keccak::hash(hex2bin(substr($pubKeyHex, 2)), 256);
        $recoveredAddress = '0x' . substr($pubKeyHash, 24);

        return strtolower($recoveredAddress) === strtolower($walletAddress);

       }catch (\Exception $e) {
        return false;
        }
    }
}
?>