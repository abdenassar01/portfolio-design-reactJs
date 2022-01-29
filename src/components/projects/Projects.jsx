import { H4 } from '../../utils';
import { projects } from './projects';
import { ProjectsList, ProjectCard, Image, Text , BiTextg, Button} from './StyledComponants'

const Projects = () => {
    return (
        <>
            <BiTextg>Projects I Built 💻 ⚛</BiTextg>
            <ProjectsList>
                {projects.map( project => 
                    <ProjectCard key={project.id}>
                        <Image src={project.img} rel={project.name} />
                        <Text>
                            <H4 bold>{project.name}</H4>
                            <br/> {project.disc}
                            <Button href="">github</Button>   
                        </Text>
                    </ProjectCard>)}
            </ProjectsList>
        </>
    )
}

export default Projects
