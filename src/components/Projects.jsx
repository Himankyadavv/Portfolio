import project from '../assets/project1.png'
import github from "../assets/github.png"
import project2 from "../assets/projects2.png"
export function Projects(){
    return (
        <div id="projects" className="bg-[#141b1b] text-white font-bold text-2xl lg:text-4xl w-full px-[2rem] lg:px-[6rem] py-[4rem] flex flex-col items-center gap-[2rem] lg:gap-[4rem]">
        <div>
            Projects
        </div>
        <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[6rem]">
            
            <div className="w-full lg:w-[30rem] border-white rounded-lg shadow-lg shadow-[#0771bc]">
                <img className="rounded-lg w-full" src={project} alt="Legal Ease Project" />
                <div className="px-[2rem] py-[1rem]">
                    <h1>Legal-Ease</h1>
                    <p className="text-sm mt-2 font-normal">A website between lawyers and clients, where users can hire lawyers by searching their names and domain.</p>
                    <div className="mt-4 flex gap-3 items-center">
                        <div className="w-8 rounded-full p-2 bg-white">
                            <img className="w-8" src={github} alt="GitHub" />
                        </div>
                        <a className="text-sm font-normal text-blue-700" href="https://github.com/Himankyadavv/Legal-Ease">Click here to check the GitHub repo</a>
                    </div>
                </div>
            </div>

           
            <div className="w-full lg:w-[30rem] border-white rounded-lg shadow-lg shadow-[#0771bc]">
                <img className="rounded-lg w-full" src={project2} alt="Business Card Creator Project" />
                <div className="px-[2rem] py-[1rem]">
                    <h1>Business Card Creator</h1>
                    <p className="text-sm mt-2 font-normal">Allows users to input details and create a business card to grow their business.</p>
                    <div className="mt-4 flex gap-3 items-center">
                        <div className="w-8 rounded-full p-2 bg-white">
                            <img className="w-8" src={github} alt="GitHub" />
                        </div>
                        <a className="text-sm font-normal text-blue-700" href="https://github.com/Himankyadavv/Legal-Ease">Click here to check the GitHub repo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}