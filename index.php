<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Namaz App</title>
    <script src="jquery.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="table_css.css">
</head>
<body>

<div id="main-id">
    <div class="month-selector">
        <form action="" id="main-contact">
            <input type="hidden" name="secret" value="7872whjui9k8">
            <p>
                <label for="month">Month : </label>
                <select id="select-month" name="month">
                    <option value="January">January</option>
                    <option value="February" >February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </p>
        </form>
        <p class = "currentDate"></p>
        <p class="currentTime"></p>
    </div>
    <div id="audio">
        <audio id="azan-audio" controls >
            <source src="azan.mp3" type="audio/mp3">
            Sorry Your browser does not support embedded audio :(
        </audio>
        <p>
            <input type="submit" id="play" value="Play">
            <input type="submit" id="pause" value="Pause">
            <input type="submit" id="restart" value="Go to the Begining">
            Timestamp : <span id="timestamp">00:00</span>
        </p>
    </div>

    <div class="table">
        <table>
            <tr id="table-head-row">
                <th class="monthName">Month</th>
                <th class="dates">Date</th>
                <th class="fajir">Fajir</th>
                <th class="sunrise">Sunrise</th>
                <th class="zohar">Zohar</th>
                <th class="sunset">Sunset</th>
                <th class="maghreb">Maghreb</th>
            </tr>
        </table>
    </div>
</div>

<script src="javascript.js"></script>
</body>
</html>