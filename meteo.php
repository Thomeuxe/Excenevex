<link rel="stylesheet/less" type="text/css" href="ot/css/main.less">

<?php 

$json =file_get_contents('http://www.prevision-meteo.ch/services/json/lat=46.354lng=6.352');

$data = json_decode($json, true);

?>
<aside id="meteo" class="hidden-xs">
	<header>
		<div>
			<h2>La météo d &#039; Excenevex</h2>
			<h3><span class="day"><?php echo $data['current_condition']['date'] ?></span><span class="year"><?php echo $data['current_condition']['date'] ?></span></h3>
		</div>
		<a id="calendar" href="#"><i class="fa fa-calendar"></i></a>
	</header>
	<section>
		<div class="row">
			<div class="col-xs-6 text-center">
				<p><?php echo $data['current_condition']['condition'] ?></p>
			</div>
			<p class="col-xs-6 temperature"><?php echo $data['current_condition']['tmp'] ?></p>
		</div>
		<p>Lever de soleil <b><?php echo $data['city_info']['sunrise'] ?></b></p>
		<p>Coucher de soleil <b><?php echo $data['city_info']['sunset'] ?></b></p>
	</section>
</aside>

<?php var_dump($data); ?>