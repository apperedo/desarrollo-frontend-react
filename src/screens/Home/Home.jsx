import React from 'react';

const Home = () => {
    return (
        <>
            <div className='header'>
                Módulo 7: DESARROLLO FRONTEND
                <div className='line-break'>CON REACT JS</div>
            </div> 
            <div className='titulo'>
                Bienvenido
            </div>
            <hr className='line'/>
            <div className='texto'>
                Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, 
                el manejo de hooks y el uso de <b>Redux</b>.
            </div>
            <div className='titulo'>
                Temas cubiertos
            </div>
            <hr className='line'/>
            <body>
            <div class="grid-container">
                <div class="grid-item">Componentes 
                    <div className='line-break-container'>funcionales</div>
                    <div className='line-break-container'>y de clase</div>
                </div>
                <div class="grid-item">Uso de
                    <div className='line-break-container'><b>React</b></div>
                    <div className='line-break-container'><b>hooks</b></div>
                    <div className='line-break-container'>como</div>
                    <div className='line-break-container'>useState</div>
                    <div className='line-break-container'>y</div>
                    <div className='line-break-container'>useEffect</div>
                </div>
                <div class="grid-item">Creación
                    <div className='line-break-container'>de <b>custom</b></div>
                    <div className='line-break-container'><b>hooks</b> como</div>
                    <div className='line-break-container'>useForm</div>
                </div>
                <div class="grid-item">Gestión 
                    <div className='line-break-container'>de</div>
                    <div className='line-break-container'>variables</div>
                    <div className='line-break-container'>de</div>
                    <div className='line-break-container'>estado</div>
                    <div className='line-break-container'>con</div>
                    <div className='line-break-container'><b>useState</b></div>
                </div>
                <div class="grid-item">Gestión
                    <div className='line-break-container'>de</div>
                    <div className='line-break-container'>estado</div>
                    <div className='line-break-container'>global</div>
                    <div className='line-break-container'>con</div>
                    <div className='line-break-container'><b>Redux</b></div>
                </div>
                <div class="grid-item">Integración 
                    <div className='line-break-container'>de <b>Redux</b></div>
                    <div className='line-break-container'>con <b>React</b></div>
                </div>
                <div class="grid-item">Manejo de
                    <div className='line-break-container'><b>Formularios</b></div>
                    <div className='line-break-container'>en <b>React</b></div>
                </div>
                <div class="grid-item">Publicando
                    <div className='line-break-container'>nuestra</div>
                    <div className='line-break-container'><b>Pagina</b></div>
                    <div className='line-break-container'>con</div>
                    <div className='line-break-container'><b>GitHub</b></div>
                    <div className='line-break-container'><b>Pages</b></div>
                </div>
    </div>
</body>
            <div className='titulo'>
                Recursos Adicionales
            </div>
            <hr className='line'/>
            
            <div className='texto'>
                Para profundizar en los temas cubiertos, consulta los siguientes recursos:
            </div>
        </>
        
    );
};

export default Home;