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
    echo "<h1>Restaurants</h1>";
    $search = $client->searchObject(['query' => [
        "selectionIds" => [32331],
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
        if (isset($objet["informationsRestauration"])) {
            if (isset($objet["informationsRestauration"]["classement"])) {
                echo "Nombre d'étoiles : ".$objet["informationsRestauration"]["classement"]["libelleFr"]."</br>";
            }
            if (isset($objet["informationsRestauration"]["chef"])) {
                echo "Chef : ".$objet["informationsRestauration"]["chef"]."</br>";
            }
            if (isset($objet["informationsRestauration"]["capacite"]["nombreMaximumCouverts"])) {
                echo "Nombre de couverts : ".$objet["informationsRestauration"]["capacite"]["nombreMaximumCouverts"]."</br>";
            }
            if (isset($objet["informationsRestauration"]["specialites"])) {
                echo "Spécialités : ";
                foreach ($objet["informationsRestauration"]["specialites"] as $specialite) {
                    echo $specialite["libelleFr"]."</br>";
                }
            }
            

        }

        // var_dump($objet["informationsRestauration"]);
        if (isset($objet["illustrations"])) {
           foreach ($objet["illustrations"] as $imageHotel) {
               ?><img src=<?php echo $imageHotel["traductionFichiers"][0]["url"];?> /> <?php
           }
       }


    }


} catch (\Sitra\ApiClient\Exception\SitraException $e) {
    echo $e->getMessage();
    echo "\n";
    echo $e->getPrevious()->getMessage();
}
