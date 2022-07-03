import { Fragment } from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import {FaArrowRight} from "react-icons/fa"
import '../../Styles/_services.scss'
export default function Services() {
	return (
		<Fragment>
			<div className="services_holder">
				<div className="float_txt">
					Things
					<br />
					We Do
				</div>
				<div className="intro_holder">
					<h2>
						We Deliver
						<br /> Digital Productivity
					</h2>
					<p>
						We craft technology solutions that digitally bond and transform the
						productivity of our customers and their citizens, workers, consumers
						and partners.
					</p>

					{/* Images */}
					<div className="imgs_holder">
						<div className="img_box img1">
							<img src={img4} alt="" />
							<div className="img_name">Crafty Mind</div>
							<a href="" className="read_more">
								<FaArrowRight/>

								<span>Read more</span>
							</a>
						</div>
						<div className="img_box img2">
							<img src={img2} alt="" />
							<div className="img_name">Services</div>
							<a href="" className="read_more">
								<FaArrowRight/>
								
								<span>Read more</span>
							</a>
						</div>
						<div className="img_box img3">
							<img src={img3} alt="" />
							<div className="img_name">Enovision</div>
							<a href="" className="read_more">
								<FaArrowRight/>
								
								<span>Read more</span>
							</a>
						</div>
						<div className="img_box img4">
							<img src={img1} alt="" />
							<div className="img_name">Dynamic365</div>
							<a href="" className="read_more">
								<FaArrowRight/>
								<span>Read more</span>
							</a>
						</div>
						<div className="img_box img5">
							<img src={img4} alt="" />
							<div className="img_name">Transformation</div>
							<a href="" className="read_more">
								<FaArrowRight/>
								<span>Read more</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
