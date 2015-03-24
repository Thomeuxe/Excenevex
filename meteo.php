<?php 

$json =file_get_contents('http://www.myweather2.com/developer/weather.ashx?uac=usL0jDrsUS&output=json&uref=c9866f18-6842-44ba-9e7a-373a46766348');

$data = json_decode($json, true);

echo $data['weather']['current_weather'][0]['weather_text'];
var_dump($data['weather']);




?>