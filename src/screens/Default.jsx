import Logo from './Default/_components/Logo';
import Description from './Default/_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './Default/_components/LessonInfo';
import Contador from './Default/_components/Contador';


const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <OpenLink 
                    title = "Learn React" 
                    url = "https://react.dev/"
                />
                <OpenLink 
                    title = "Mi Proyecto React (GitHub)" 
                    url = "https://github.com/apperedo/desarrollo-frontend-react"
                />
                <LessonInfo 
                    number = "1: " 
                    title = "Introducción a react y estructura de proyecto"
                />
                <LessonInfo 
                    number = "2: " 
                    title = "Context API para la gestión del estado global en aplicaciones react"
                />
            </header>
        </>
    );
};

export default Default;