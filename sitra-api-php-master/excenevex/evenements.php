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
    $search = $client->searchObject(['query' => [
        "selectionIds" => [32290],
        ]]);

    /*
     * Object API's
     */
    echo "<h1>Evenements</h1>";
    foreach($search["objetsTouristiques"] as $objet) {
        // var_dump($objet);
        echo "Nom : ".$objet["nom"]["libelleFr"]."</br>";
        echo "Description : ".$objet["presentation"]["descriptifCourt"]["libelleFr"]."</br>";
        echo "Lieu : ".$objet["informationsFeteEtManifestation"]["nomLieu"]."</br>";
        // echo "Date : ".$objet["ouverture"]."</br>";
        echo "Contact : ";
        foreach ($objet["informations"]["moyensCommunication"] as $moyenCom) {
            echo $moyenCom["coordonnees"]["fr"];
            echo "</br>";
        }
            


        var_dump($objet);



    }


} catch (\Sitra\ApiClient\Exception\SitraException $e) {
    echo $e->getMessage();
    echo "\n";
    echo $e->getPrevious()->getMessage();
}
