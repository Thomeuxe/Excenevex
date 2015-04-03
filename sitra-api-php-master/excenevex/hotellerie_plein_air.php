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
    echo "<h1>Camping et Aires</h1>";
    $search = $client->searchObject(['query' => [
        "selectionIds" => [32289],
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
        if (isset($objet["informationsHotelleriePleinAir"])) {
            if (isset($objet["informationsHotelleriePleinAir"]["classement"])) {
                echo "Nombre d'étoiles : ".$objet["informationsHotelleriePleinAir"]["classement"]["libelleFr"]."</br>";
            }
            if (isset($objet["informationsHotelleriePleinAir"]["capacite"]["nombreEmplacementsClasses"])) {
                echo "Nombre d'emplacements : ".$objet["informationsHotelleriePleinAir"]["capacite"]["nombreEmplacementsClasses"]."</br>";
                echo "Nombre de mobilhomes : ".$objet["informationsHotelleriePleinAir"]["capacite"]["nombreLocationMobilhomes"]."</br>";
                echo "Nombre de bungalows : ".$objet["informationsHotelleriePleinAir"]["capacite"]["nombreLocationBungalows"]."</br>";
            }
            

        }

        // var_dump($objet);
        if (isset($objet["illustrations"])) {
           foreach ($objet["illustrations"] as $imageHotel) {
               ?><img src=<?php echo $imageHotel["traductionFichiers"][0]["url"];?> /><?php
           }
       }


   }


} catch (\Sitra\ApiClient\Exception\SitraException $e) {
    echo $e->getMessage();
    echo "\n";
    echo $e->getPrevious()->getMessage();
}
