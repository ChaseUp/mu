<template>
	<div class="mu-datepicker">
		<div class="mu-datepicker-title">
			<button class="mu-icon-angle-double-left mu-left"></button>
			<button class="mu-icon-angle-left mu-left"></button>
			<span>2017年</span>
			<span>03月</span>
			<button class="mu-icon-angle-double-right mu-right"></button>
			<button class="mu-icon-angle-right mu-right"></button>
		</div>
		<div class="mu-datepicker-body">
			<table>
				<tr>
					<th>周一</th>
					<th>周二</th>
					<th>周三</th>
					<th>周四</th>
					<th>周五</th>
					<th>周六</th>
					<th>周日</th>
				</tr>
				<tr>
					<td class="prev">1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</tr>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</tr>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</tr>
				<tr>
					<td class="active">1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</tr>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td class="next">7</td>
				</tr>
			</table>
		</div>
		<div class="mu-datepicker-bottom">
		    <a role="button">此刻</a>
			<button role="button" class="mu-button">确定</button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		}
	}
</script>