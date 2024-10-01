import photo from "../assets/customer.jpeg"
import dev from "../assets/developer.jpg"
export function Home(){
    return (
        <div id="home" className="bg-[#141b1b] w-full h-screen px-6 lg:px-24 pt-12 text-white flex flex-col lg:flex-row gap-6 lg:gap-16 items-center justify-center">
  
  <div className="text-center lg:text-left lg:w-1/2">
    <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
      Hello,{" "}
      <label className="text-[#0771bc]" htmlFor="">
        I'm
      </label>
    </h1>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold my-2">
      Himank Yadav
    </h1>
    <p className="text-xl md:text-2xl lg:text-3xl font-light">
      Full Stack Engineer
    </p>
    <p className="w-full lg:w-[30rem] pt-4 font-light tracking-wide text-sm md:text-lg lg:text-xl leading-relaxed">
      I am committed to finding innovative solutions and continuously
      experimenting to help my clients achieve their goals.
    </p>
    <div className="mt-8">
      <button className="px-6 py-3 bg-[#0771bc] rounded-xl text-lg lg:text-xl transition-all duration-300 hover:bg-blue-600">
        Let's Talk
      </button>
    </div>
  </div>

  
  <div className="rounded-full lg:w-1/2 flex justify-center lg:justify-end">
    <img className="rounded-full w-48 md:w-64 lg:w-80 h-auto object-cover shadow-lg" src={dev} alt="Developer"/>
  </div>
</div>

    )
}