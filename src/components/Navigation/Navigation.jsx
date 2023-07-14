const Navigation = () => {
  return (
    <div class='fixed bottom-10 left-1/2 z-[5000] w-[250px] max-w-[92%] -translate-x-1/2 rounded-xl bg-[rgba(220,220,220,.4)] backdrop-blur-lg'>
      <div class='flex items-center justify-between px-5 py-2.5'>
        <div>
          <a class='cursor-pointer text-xl text-black transition duration-150 hover:no-underline' href='/'>
            :):
          </a>
        </div>
        <nav class='flex gap-4'>
          <a class='cursor-pointer font-medium text-black/40 transition duration-150 hover:text-black' href='/pdp'>
            pdp
          </a>
          <a class='cursor-pointer font-medium text-black/40 transition duration-150 hover:text-black' href='/resi'>
            resi
          </a>
          <a class='cursor-pointer font-medium text-black/40 transition duration-150 hover:text-black' href='/info'>
            info
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
