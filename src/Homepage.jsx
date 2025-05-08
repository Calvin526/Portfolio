import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import RR from './files/RoommateRoulette.png'
import ML from './files/MindLink.png'
import SP from './files/SideProject.png'

function Homepage()
{
    return (
        <div>

        <br />
        <h1 className = "text-6xl font-bold">Calvin Garcia</h1>
        <br />

        <div className = "text-3xl">
            <h1 className = "font-bold">Web Developer // Software Developer</h1>
        </div>

        <br />

        <div className = "text-2xl">
            <h1 className>Master's of Science in Computer Science @ Stevens Institute of Technology</h1>
            <h1 className>Bachelor's of Science in Computer Science @ Fordham University</h1>
        </div>

        <br />

        <div class="flex justify-center items-center">
            <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col items-center">
                    <a href="https://www.linkedin.com/in/calvin-garcia/" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" class="h-8 w-8" />
                    </a>
                    <h2 class="text-2xl font-semibold">LinkedIn</h2>
                </div>

                <div class="flex flex-col items-center">
                    <a href="https://github.com/Calvin526" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" class="h-8 w-8" />
                    </a>
                    <h2 class="text-2xl font-semibold">GitHub</h2>
                </div>
            </div>
        </div>

        <br /> 

        <h1 className = "text-4xl">Summary </h1>
        <br />
        <div class="inline-block border border-black max-w-[50%] text-xl">
                <h1> Hi, my name is Calvin Garcia and I'm currently hold a Master's degree in Computer Science from Stevens Institute of Technology. I'm proficient in C++, SQL, and web technologies including JavaScript, HTML, and CSS, along with several other programming languages. I'm actively seeking entry-level opportunities in software engineering. I bring a strong foundation and a commitment to continuous learning of new emerging technologies. </h1>
                <br />
                <h1> I am currently expanding my expertise through learning new various web-development frameworks/libraries. More specifically, focusing on technologies such as Redis, GraphQL, React.js, Next.js, and Tailwind CSS, with the aim of applying these newfound skills in any future professional opportunities. </h1>
            </div>
        <br />
        <br />

        <h1 className = "text-4xl">Relevant Skills: </h1>
        <br />
        <div class="grid grid-cols-2 gap-2" id = "proficient">
            <div class="inline-block border border-black">
                <h1 className = "text-3xl">Web Development Frameworks</h1>
                <br />
                <div class="grid grid-cols-3 gap-2">
                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">React</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">GraphQL</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Jxyptf2jPCbEozdlBsQhJBzws8ek2CoeZg&s" alt="Redis Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Redis</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Tailwind CSS</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Next.js</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Node.js</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://img.icons8.com/color/512/express-js.png" alt="Express.js Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Express.js</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/handlebarsjs_logo_icon_171016.png" alt="Handlebars.js Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Handlebars.js</h2>
                    </div>
                </div>

            </div>
    
            <div class="inline-block border border-black">
                <h1 className = "text-3xl">Programming Languages</h1>
                <br />
                <div class="grid grid-cols-3 gap-2">
                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">C++</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Java</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">JavaScript</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" alt="Swift Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Swift</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">HTML</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">CSS</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C# Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">C#</h2>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" class="h-8 w-8" />
                        <h2 class="text-2xl font-semibold">Python</h2>
                    </div>

                
                </div>

            </div>

            <div class="inline-block border border-black">
            <h1 className = "text-3xl">Database Management</h1>
            <br />
            <div class="grid grid-cols-3 gap-2">
                <div class="flex flex-col items-center">
                    <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="MongoDB Logo" class="h-8 w-8" />
                    <h2 class="text-2xl font-semibold">MongoDB</h2>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo" class="h-8 w-8" />
                    <h2 class="text-2xl font-semibold">PostgreSQL</h2>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL Logo" class="h-8 w-8" />
                    <h2 class="text-2xl font-semibold">SQL</h2>
                </div>


            </div>
            </div>

            <div class="inline-block border border-black">
            <h1 className = "text-3xl">Cloud Computing/Microservices</h1>
            <br />
            <div class="grid grid-cols-3 gap-2">
                <div class="flex flex-col items-center">
                    <img src="https://www.clipartmax.com/png/small/421-4211389_check-official-docker-logo.png" alt="Docker Logo" class="h-8 w-8" />
                    <h2 class="text-2xl font-semibold">Docker</h2>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1234px-Kubernetes_logo_without_workmark.svg.png" alt="K8s Logo" class="h-8 w-8" />
                    <h2 class="text-2xl font-semibold">Kubernetes</h2>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*h78te1Nr-bUgqCtmFylC_g.png" alt="AWS EC2 Logo" class="h-8 w-8" />
                    <h2 class="text-2xl font-semibold">AWS EC2</h2>
                </div>


            </div>
            </div>
        </div>

        <br />

        
        <h1 className = "text-4xl">Education </h1>
        <br /> 
        <div id="education" class="flex justify-center items-center gap-4">
            <div class="inline-block border border-black">
                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://findlogovector.com/wp-content/uploads/2019/01/stevens-institute-of-technology-logo-vector.png"
                    alt="Stevens Logo"
                    />
                    <CardContent>
                    <h1 className = "text-2xl font-bold"> Stevens Institute of Technology </h1>
                    <h3> Master's of Science in Computer Science </h3>
                    <h3> Hoboken, NJ </h3>
                    <h3> September 2023 - May 2025 </h3>
                    </CardContent>
                </Card>
            </div>

            <br />

            <div class="inline-block border border-black">
                <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://www.dasny.org/sites/default/files/styles/press_release_pres_corner/public/2020-02/fordham.jpg?itok=s3edNCUN"
                    alt="Fordham Logo"
                    />
                    <CardContent>
                    <h1 className = "text-2xl font-bold"> Fordham University </h1>
                    <h3> Bachelor's of Science in Computer Science </h3>
                    <h3> Bronx, NY </h3>
                    <h3> August 2020 - May 2023</h3>
                    </CardContent>
                </Card>
            </div>
            
        </div>
        <br />

        <h1 className = "text-4xl">Projects </h1>

        <br />

        <div id="projects" class="flex justify-center items-center gap-4">

            <div class="inline-block border border-black">
                <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={RR}
                        alt="RR Image"
                    />
                    
                    <CardContent>
                        <h1 className = "text-2xl font-bold"> Roommate Roulette </h1>
                        <h3> Roommate Finder Application </h3>

                        <br />
                        <h3> Roommate Roulette is an application designed to help users find roommate groups in areas nearby to them. Users are able to filter roommate groups by closest to furthest distance or overall group budget, etc. </h3>
                        <br />

                        <a href = "https://github.com/Calvin526/CS-546-Group-33-Final-Project" className = "text-blue-500" target="_blank" rel="noopener noreferrer"> Project Link </a>
                    </CardContent>
                </Card>
            </div>

            <div class="inline-block border border-black">
                <Card sx={{ maxWidth: 345, maxHeight:481}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ML}
                        alt="MindLink Image"
                    />
                    
                    <CardContent>
                        <h1 className = "text-2xl font-bold"> MindLink </h1>
                        <h3> A Link Between Two Worlds </h3>

                        <br />
                        <h3> MindLink is a 2D platformer game created in Unity. It's designed to mimic an EEG headset particularly with what direction the player character moves.</h3>
                        <br />

                        <a href = "https://github.com/Calvin526/MindLink" className = "text-blue-500" target="_blank" rel="noopener noreferrer"> Project Link </a>
                    </CardContent>
                </Card>
            </div>

            <div class="inline-block border border-black">
                <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={SP}
                        alt="SideProject Image"
                    />
                    
                    <CardContent>
                        <h1 className = "text-2xl font-bold"> SideProject </h1>
                        <h3> A Coding Portfolio Page Web Application  </h3>

                        <br />
                        <h3> SideProject is an application deisnged for coders to publish/view projects and can be used for recruiters to see if a candidate has enough relevant experience in a particular technology through their projects.  </h3>
                        <br />

                        <a href = "https://github.com/Calvin526/SideProject" className = "text-blue-500" target="_blank" rel="noopener noreferrer"> Project Link </a>
                    </CardContent>
                </Card>
            </div>



               
        </div>

        <br />

        <h1 className = "text-5xl font-bold">© Calvin Garcia</h1>

        <br />

        </div>
        

 




     
    )
}

export default Homepage;