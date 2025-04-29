<?php

namespace App\Services;

class Signature
{
    protected $r;
    protected $s;
    protected $v;

    public function __construct(string $r, string $s, int $v)
    {
        $this->r = $r;
        $this->s = $s;
        $this->v = $v;
    }

    public static function fromHex(string $hex): self
    {
        $hex = ltrim($hex, '0x'); // por si viene con 0x
        if (strlen($hex) !== 130) {
            throw new \InvalidArgumentException("Invalid signature length");
        }

        $r = '0x' . substr($hex, 0, 64);
        $s = '0x' . substr($hex, 64, 64);
        $v = hexdec(substr($hex, 128, 2));

        // Normalizar v si es 27 o 28 (estándar viejo)
        if ($v >= 27) {
            $v -= 27;
        }

        return new self($r, $s, $v);
    }

    public function getR(): string
    {
        return $this->r;
    }

    public function getS(): string
    {
        return $this->s;
    }

    public function getRecoveryParam(): int
    {
        return $this->v;
    }
}
