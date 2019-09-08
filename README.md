## Welcome to DeepCell

DeepCell in a few words, it is a hub of code, open source code.
You can use the code found in [DeepCell](https://deepcell.cf) as you wish, generally DeepCell try to adhere to GNU Public License v2 unless it is explictly stated otherwise.


### Software

The following includes a list of software developed by DeepCell and others since 1998, some are very old stuffs, some are nice piece of work, here you will find an eclectic variety of open source code that can be useful for personal or professional use.

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
			<div class="divTableCell">TICKER</div>
			<div class="divTableCell">RATE</div>
			<div class="divTableCell">HANDLING</div>
			<div class="divTableCell"><b>OBS</b></div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">USD</div>
			<div class="divTableCell" id="show-data-usd"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">American Dollar</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">THB</div>
			<div class="divTableCell" id="show-data-thb"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Thai Baht</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">BRL</div>
			<div class="divTableCell" id="show-data-brl"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Brazilian Real</div>
		</div>
		<!--
		<div class="divTableRow">
			<div class="divTableCell">LTC</div>
			<div class="divTableCell" id="show-data-ltc"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Litecoin</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XMR</div>
			<div class="divTableCell" id="show-data-xmr"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Monero</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XZC</div>
			<div class="divTableCell" id="show-data-xzc"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Zcoin</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">ZEC</div>
			<div class="divTableCell" id="show-data-zec"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Zcash</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">DASH</div>
			<div class="divTableCell" id="show-data-dash"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">DASH</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">DOGE</div>
			<div class="divTableCell" id="show-data-doge"> </div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Dogecoin</div>
		</div>
		-->
		<div class="divTableRow">
			<div class="divTableCell">BTC</div>
			<div class="divTableCell" id="show-data-btc"></div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Bitcoin</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">BCH</div>
			<div class="divTableCell" id="show-data-bch"></div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Bitcoin Cash</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XMR</div>
			<div class="divTableCell" id="show-data-xmr"></div>
			<div class="divTableCell">Online</div>
			<div class="divTableCell">Monero</div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XAG</div>
			<div class="divTableCell" id="show-data-xag"></div>
			<div class="divTableCell">In Person</div>
			<div class="divTableCell"><small>Silver troy ounce</small></div>
		</div>
		<div class="divTableRow">
			<div class="divTableCell">XAU</div>
			<div class="divTableCell" id="show-data-xau"></div>
			<div class="divTableCell">In Person</div>
			<div class="divTableCell"><small>Gold troy ounce</small></div>
		</div>
		<!--
		<div class="divTableRow">
			<div class="divTableCell">DIA</div>
			<div class="divTableCell" id="show-data-dia">0.000125</div>
			<div class="divTableCell">In Person</div>
			<div class="divTableCell"><small>Diamond carat</small></div>
		</div>
		-->
	</div>
</div><br />



- Bitcoin: `1CXFCPxLHCjfeBTDZ7mNjjstgC5n5KJKK1`
- BitcoinCash: `bitcoincash:qpx4uw8vrnf2npa5hlr92j02hwg5c2z5yvpnqsagaf`
- Monero: `4828JWzwtXtMYesdzsGv3WEgFobS9VPTyd6rpo86eMrCa9P7A8RXcKjHDoEjhHFRW27tAZMd7ks2dW76wnxsZs6DNmmBQue`
- PayPal email: `deepcell@gmail.com`
