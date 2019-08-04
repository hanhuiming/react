const el=<div className="wrap">
		<div className="header">
			<img src={("./img/1.jpg")} />
			<div className="header-img"> 
				<img src={("./img/2.jpg")} />
			</div>
            <div className="name">爱时尚精品屋</div>
			<div className="Main">公告：欢迎光临流行爆款库存有限请尽早下单，谢谢</div>
           
		</div>
		<div className="main">
			<div className="maxBox">
				 <div className="topBox">
					<span>价格升序 ↑</span>
					<span>价格降序 ↓</span>
					<span>销量升序 ↑</span>
					<span>销量降序 ↓</span>
			</div>
				<div className="bottomBox">
				{
					data.map((item,index)=>
						<div key={index} className="min-box">
							<div className="left">
								<img src={("img/"+item.img)} />
							</div>
							<div className="right">
								<div className="cname">水墨年华2017夏装现款气质</div>
								<div className="cleft">
									<p className="p1">销量{item.yishou}</p>
									<p className="p2">单价{item.price}</p>
								</div>
								<div className="cright">
									<div className="gwc">
										加入购物车
									</div>
								</div>
							</div>	
						</div>				
						
					)
				
				}
						
						
				</div>	
			</div>
		</div>
		
	</div>
	ReactDOM.render(
		el,
		document.querySelector("#root")
	)
	