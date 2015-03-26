<link rel="stylesheet/less" type="text/css" href="ot/css/main.less">

<?php 

$json =file_get_contents('http://www.prevision-meteo.ch/services/json/excenevex');

$data = json_decode($json, true);
$cond = $data['current_condition']['condition'];
?>
<aside id="meteo" class="hidden-xs">
	<header>
		<div>
			<h2>La météo d&#039; Excenevex</h2
>			<h3><span class="day"><?php echo date('d-M')?></span><span class="year"><?php echo date('Y') ?></span></h3>
		</div>
		<a id="calendar" href="#"><i class="fa fa-calendar"></i></a>
	</header>
	<section>
		<div class="row">
			<div class="col-xs-6 text-center">
				<img src=<?php if($cond=="Ensoleillé") {
					echo "img/meteo/ensoleille.png";
				}
				elseif ($cond=="Ciel voilé" || $cond=="Eclaircies") {
					echo "img/meteo/eclaircies.png";
				}
				elseif ($cond=="Nuit claire" || $cond=="Nuit bien dégagée") {
					echo "img/meteo/nuitclaire.png";
				}
				elseif ($cond=="Nuit claire et stratus" || $cond=="Nuit légèrement voilée" || $cond=="Nuit avec développement nuageux" || $cond=="Nuit nuageuse") {
					echo "img/meteo/nuitnuage.png";
				}
				elseif ($cond=="Nuit avec averses") {
					echo "img/meteo/nuitaverses.png";
				}
				elseif ($cond=="Nuit faiblement orageuse") {
					echo "img/meteo/nuitorage.png";
				}
				elseif ($cond=="Nuit avec averses de neige faible") {
					echo "img/meteo/nuitneige.png";
				}
				elseif ($cond=="Stratus" || $cond=="Stratus se dissipant" || $cond=="Faibles passages nuageux" || $cond=="Développement nuageux" || $cond=="Faiblement nuageux") {
					echo "img/meteo/nuage.png";
				}
				elseif ($cond=="Fortement nuageux") {
					echo "img/meteo/nuagefort.png";
				}
				elseif ($cond=="Brouillard") {
					echo "img/meteo/brouillard.png";
				}
				elseif ($cond=="Averses de pluie faible" || $cond=="Couvert avec averses") {
					echo "img/meteo/aversesfaible.png";
				}
				elseif ($cond=="Averses de pluie modérée" || $cond=="Averses de pluie forte") {
					echo "img/meteo/averses.png";
				}
				elseif ($cond=="Pluie faible" || $cond=="Pluie modérée" || $cond=="Pluie forte") {
					echo "img/meteo/pluie.png";
				}
				elseif ($cond=="Faiblement orageux" || $cond=="Orage modéré") {
					echo "img/meteo/oragefaible.png";
				}
				elseif ($cond=="Fortement orageux") {
					echo "img/meteo/orage.png";
				}
				elseif ($cond=="Averses de neige faible" || $cond=="Neige faible" || $cond=="Pluie et neige mêlée faible") {
					echo "img/meteo/neigefaible.png";
				}
				elseif ($cond=="Neige modérée" || $cond=="Neige forte" || $cond=="Pluie et neige mêlée modérée" || $cond=="Pluie et neige mêlée forte") {
					echo "img/meteo/neige.png";

					Elseif CACOU = 1000 = :)
					<php hash(
						, data) }?>>
			</div>
			<p class="col-xs-6 temperature"><?php echo $data['current_condition']['tmp'] ?></p>
		</div>
		<p>Lever de soleil <b><?php echo $data['city_info']['sunrise'] ?></b></p>
		<p>Coucher de soleil <b><?php echo $data['city_info']['sunset'] ?></b></p>
	</section>
</aside>