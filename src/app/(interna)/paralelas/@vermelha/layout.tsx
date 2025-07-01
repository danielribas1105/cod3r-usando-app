export default async function Layout(props: any) {
   return (
      <div className="flex justify-center items-center h-36 text-3xl font-black bg-red-600">
         {props.children}
      </div>
   )
}
