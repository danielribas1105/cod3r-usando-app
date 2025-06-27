import Recurso from './recurso'

export default function Recursos() {
   return (
      <div className="grid grid-cols-3 gap-5">
         <Recurso
            titulo="300x mais rápido"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor."
            imagem="https://picsum.photos/250/300?grayscale"
         />
         <Recurso
            titulo="Vanguarda em tecnologia"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor."
            imagem="https://picsum.photos/250/301?grayscale"
         />
         <Recurso
            titulo="Suporte 24x7"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor."
            imagem="https://picsum.photos/250/299?grayscale"
         />
         <Recurso
            titulo="Design web responsivo"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor."
            imagem="https://picsum.photos/250/298?grayscale"
         />
         <Recurso
            titulo="SEO otimizado"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor."
            imagem="https://picsum.photos/251/300?grayscale"
         />
         <Recurso
            titulo="Yada yada"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor leo, mattis eget rhoncus sit amet, pellentesque at dolor."
            imagem="https://picsum.photos/249/300?grayscale"
         />
      </div>
   )
}
