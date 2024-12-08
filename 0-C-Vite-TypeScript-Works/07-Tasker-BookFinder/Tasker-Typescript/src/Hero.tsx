// import BookHeader from "./book/BookHeader";


export default function Hero() {
  
	return (
		<div>
			<section className="pb-[114px] pt-20 md:mt-[100px] text-[#f4f3f1]">
			<div className="container lg:px-20">
				<div className="grid items-center gap-6 md:grid-cols-2">
					<div className="flex justify-center md:order-2">
						<img className="max-md:w-full" src="/images/frame.png" width="326" height="290" alt="frame" />
					</div>
					<div>
						<h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
							Tasker | Book Search with Filter
						</h1>
						<p className="text-lg my-2 opacity-80">
							Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for
							Seamless Goal Achievement and Stress-Free Task Management. <br />
							You can CRUD task and search 🔍 and favourite them ⭐
						</p>
						
					</div>
				</div>
			</div>
		</section>
		
		</div>
	  )
}
