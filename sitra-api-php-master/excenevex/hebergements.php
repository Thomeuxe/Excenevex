<?php

// Include Composer autoload
include __DIR__."/../vendor/autoload.php";

// Create the client
$client = new \Sitra\ApiClient\Client([
    'apiKey'        => 'LPTPDIVS',
    'projectId'     => 1288,
    'baseUrl'       => 'http://api.sitra-tourisme.com/',
]);

try {
    /*
     * Reference
     */
    $excenevex = $client->getReferenceCity(['query' => [ 'codesInsee' => ["74121"] ]]);
    var_dump($excenevex);


    /*
     * Object API's
     */
    $search = $client->searchObject(['query' => [
    "selectionIds" => [32285, 32286],
]]);

    foreach($search["objetsTouristiques"] as $objet) {
        var_dump($objet);
    }

} catch (\Sitra\ApiClient\Exception\SitraException $e) {
    echo $e->getMessage();
    echo "\n";
    echo $e->getPrevious()->getMessage();
}
