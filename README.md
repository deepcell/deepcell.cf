## Welcome to DeepCell

DeepCell in a few words, it is a hub of code, open source code.
You can use the code found in [DeepCell](https://deepcell.cf) as you wish, generally DeepCell try to adhere to GNU Public License v2 unless it is explictly stated otherwise.


### Software

The following includes a list of software developed by DeepCell and other since 1998, some are very old stuffs, others are piece of uselless shit, some are nice piece of work, here you will find an eclectic variety of open source code that can be useful for personal or professional use.

I will mark all the repositories with an [A] and [D] where [A] extends for ACTIVE and [D] for DEFUNCT.

- [Food Ordering System](https://github.com/deepcell/Food-Ordering-System) [A]
- [synnet](https://github.com/deepcell/synnet) [A] more info: https://synnet.tk
- [Nota Fiscal de Serviço de Comunicação, modelo 21.](https://github.com/deepcell/Nfsc21) [A]
- [Mikrotik](https://github.com/deepcell/Mikrotik) [A]
- [prometheuz](https://github.com/deepcell/prometheuz) [A] more info: http://prometheus.gq
- [wordpress stuffs](https://github.com/deepcell/wordpress-stuff) [A] This repo try to demonstrate how to integrate your wordpress with 3rd party system in the most simple and effective way.
- [DMT - Dead Man's Trigger](https://github.com/deepcell/DMT) [D]


### Support or Contact

Having trouble with some code? DeepCell provide paid consultancy, please [contact me](mail:deepcell@gmail.com) and I’ll help you sort it out.


### Accepted Payment in:

|Ticker|Rate(USD)|Handling|
|---|---|---|
|XAU - Gold (troy ounce)|0.00|Personal|
|XAG - Silver (troy ounce)|0.00|Personal|
|DIA - Diamond Carat|8000.00 carat|Personal|
|BTC - Bitcoin|0.00|Electronic|
|DOGE - Dogecoin|0.00|Electronic|
|DASH - Dash|0.00|Electronic|
|ZEC - Zcash|0.00|Electronic|
|XZC - Zcoin|0.00|Electronic|
|XMR - Monero|0.00|Electronic|
|LTC - Litecoin|0.00|Electronic|
|USD - American Dollar|1.00|Electronic|
|BRL - Brazilian Real|0.00|Electronic|
|THB - Thai Baht|0.00|Electronic|

- Bitcoin: `39fNfmdJEL77CLuYXe3WzTgeYbF346LE9i`
- Dogecoin: `DP6jE9QfJYDnW9fLp6YWdzudo6TKLYbUnU`
- Litecoin: `LL5DKT63SQngT2j1az8EV7fpikgAxMTbqk`
- Zcash: `t1Ma3hV7mNMR3Npp8eGeZzq1G2amdpAPuxg`
- Monero: `4828JWzwtXtMYesdzsGv3WEgFobS9VPTyd6rpo86eMrCa9P7A8RXcKjHDoEjhHFRW27tAZMd7ks2dW76wnxsZs6DNmmBQue`
- Zcoin: `a32UsRrGM5q9m6g8D4z9AtDPLCEoJxAdHw`
- Dash: ``
- Dogecoin: ``
- PayPal email: `deepcell@gmail.com`


<script src="{{ 'https://code.jquery.com/jquery-3.2.1.min.js' }}"></script>
<script src="{{ '/exchange-table.js' }}"></script>

<style type="text/css">
.divTable{
	display: table;
	width: 100%;
}
.divTableRow {
	display: table-row;
}
.divTableHeading {
	background-color: #EEE;
	display: table-header-group;
}
.divTableCell, .divTableHead {
	border: 1px solid #999999;
	display: table-cell;
	padding: 3px 10px;
}
.divTableHeading {
	background-color: #EEE;
	display: table-header-group;
	font-weight: bold;
}
.divTableFoot {
	background-color: #EEE;
	display: table-footer-group;
	font-weight: bold;
}
.divTableBody {
	display: table-row-group;
}
</style>

<div class="divTable">
	<div class="divTableBody">
		<div class="divTableRow">
			<div class="divTableCell"><b>ticker</b></div>
			<div class="divTableCell"><b>rate</b></div>
			<div class="divTableCell"><b>obs</b></div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">USD</div>
			<div class="divTableCell" id="show-data-usd"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">THB</div>
			<div class="divTableCell" id="show-data-thb"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">BRL</div>
			<div class="divTableCell" id="show-data-brl"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">LTC</div>
			<div class="divTableCell" id="show-data-ltc"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XMR</div>
			<div class="divTableCell" id="show-data-xmr"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XZC</div>
			<div class="divTableCell" id="show-data-xzc"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">ZEC</div>
			<div class="divTableCell" id="show-data-zec"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">DASH</div>
			<div class="divTableCell" id="show-data-dash"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">DOGE</div>
			<div class="divTableCell" id="show-data-doge"> </div>
			<div class="divTableCell"> </div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">BTC</div>
			<div class="divTableCell" id="show-data-btc"></div>
			<div class="divTableCell"></div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XAG</div>
			<div class="divTableCell" id="show-data-xag"></div>
			<div class="divTableCell"><small>ounce</small></div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XAU</div>
			<div class="divTableCell" id="show-data-xau"></div>
			<div class="divTableCell"><small>ounce</small></div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">DIA</div>
			<div class="divTableCell" id="show-data-dia"></div>
			<div class="divTableCell"><small>Diamond carat</small></div>
		</div>
	</div>
</div>
