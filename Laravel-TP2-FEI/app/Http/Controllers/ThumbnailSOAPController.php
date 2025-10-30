<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ThumbnailService;

class ThumbnailController extends Controller
{
    /**
     * Endpoint REST que actúa como wrapper del servicio SOAP.
     * Convierte la respuesta SOAP a formato JSON legible.
     */
    public function capture(Request $request, ThumbnailService $thumbnailService)
    {
        $request->validate([
            'url' => 'required|url',
            'width' => 'nullable|integer',
            'height' => 'nullable|integer',
        ]);

        $url = $request->url;
        $width = $request->width ?? 1280;
        $height = $request->height ?? 720;

        $result = $thumbnailService->capture($url, $width, $height);

        return response()->json($result);
    }
}
        