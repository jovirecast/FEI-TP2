<?php

namespace App\Services;

use SoapClient;
use Exception;

class ThumbnailService
{
    protected $client;
    protected $apiKey;

    public function __construct()
    {
        $this->apiKey = env('THUMBNAIL_API_KEY');

        // URL del WSDL del servicio SOAP
        $wsdl = "https://api.thumbnail.ws/soap?wsdl";

        // Inicializamos el cliente SOAP
        $this->client = new SoapClient($wsdl, [
            'trace' => true,
            'exceptions' => true,
        ]);
    }

    /**
     * Realiza una llamada al servicio SOAP externo para capturar una URL.
     *
     * @param string $url - Dirección web a capturar
     * @param int $width - Ancho deseado de la imagen
     * @param int $height - Alto deseado de la imagen
     * @return array - Resultado o error
     */
    public function capture(string $url, int $width = 1280, int $height = 720)
    {
        try {
            $params = [
                'key' => $this->apiKey,
                'url' => $url,
                'width' => $width,
                'height' => $height,
            ];

            // Llamada al método SOAP “capture”
            $response = $this->client->__soapCall('capture', [$params]);

            // Transformamos la respuesta SOAP a JSON
            return [
                'status' => 'success',
                'thumbnail_url' => $response->thumbnailUrl ?? null,
                'requested_url' => $url,
                'width' => $width,
                'height' => $height
            ];
        } catch (Exception $e) {
            return [
                'status' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }
}
