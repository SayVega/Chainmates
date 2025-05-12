<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Illuminate\Database\QueryException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Exception;
class HandleApiErrors
{
    public function handle(Request $request, Closure $next)
    {
        try {
            return $next($request);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors(),
            ], 422);
        } catch (TokenInvalidException|TokenExpiredException|UnauthorizedHttpException $e) {
            return response()->json([
                'message' => 'Token inválido o expirado',
            ], 401);
        } catch (QueryException $e) {
            if (str_contains($e->getMessage(), 'users_email_unique')) {
                return response()->json([
                    'message' => 'El correo electrónico ya está registrado',
                ], 409);
            }

            return response()->json([
                'message' => 'Error de base de datos',
                'error' => $e->getMessage(),
            ], 500);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
