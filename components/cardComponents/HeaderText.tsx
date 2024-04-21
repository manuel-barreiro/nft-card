
function HeaderText({name, id}: {name: string, id: number}) {
  return (
    <h3 className="w-full capitalize text-white font-semibold text-xl text-start hover:text-customCyan cursor-pointer transition-all ease-in-out duration-300 ">
      {name} #{id}
    </h3>
  )
}

export default HeaderText