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


    /*
     * Object API's
     */
    echo "<h1>Gites et Meubles</h1>";
    $search = $client->searchObject(['query' => [
        "selectionIds" => [32285],
        ]]);
    // var_dump($search["objetsTouristiques"]);
    foreach($search["objetsTouristiques"] as $objet) {
        // var_dump($objet);
        echo "Nom : ".$objet["nom"]["libelleFr"]."</br>";
        echo "Description : ".$objet["presentation"]["descriptifCourt"]["libelleFr"]."</br>";
        echo "Adresse : ".$objet["localisation"]["adresse"]["adresse1"]."</br>";
        if (isset($objet["localisation"]["adresse"]["adresse2"])) {
            echo $objet["localisation"]["adresse"]["adresse2"]."</br>";
        }
        echo "Contact : ";
        foreach ($objet["informations"]["moyensCommunication"] as $moyenCom) {
            echo $moyenCom["coordonnees"]["fr"];
            echo "</br>";
        }
        if (isset($objet["informationsHebergementLocatif"])) {
            if (isset($objet["informationsHebergementLocatif"]["classementPrefectoral"])) {
                echo "Nombre d'étoiles : ".$objet["informationsHebergementLocatif"]["classementPrefectoral"]["libelleFr"]."</br>";
            }
            echo "Capacité : ".$objet["informationsHebergementLocatif"]["capacite"]["capaciteHebergement"]." personnes"."</br>";
            echo "Nombre de lits doubles : ".$objet["informationsHebergementLocatif"]["capacite"]["nombreLitsDoubles"]."</br>";
            echo "Nombre de lit simples : ".$objet["informationsHebergementLocatif"]["capacite"]["nombreLitsSimples"]."</br>";
            echo "Nombre de chambres : ".$objet["informationsHebergementLocatif"]["capacite"]["nombreChambres"]."</br>";

        }

        // var_dump($objet);
         if (isset($objet["illustrations"])) {
             foreach ($objet["illustrations"] as $imageHotel) {
                 ?><img src=<?php echo $imageHotel["traductionFichiers"][0]["url"];?> /><?php
             }
         }
            

    }

    $hotel = $client->searchObject(['query' => [
        "identifiants"=>[127480],
        ]]);
    // var_dump($hotel["objetsTouristiques"]);


} catch (\Sitra\ApiClient\Exception\SitraException $e) {
    echo $e->getMessage();
    echo "\n";
    echo $e->getPrevious()->getMessage();
}
