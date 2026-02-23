type StateCardProps = {
    label:string
    value:string 
    highlight?:string

}

export default function StateCard({label,value,highlight}:StateCardProps){
    return(
        <div className="bg-zinc-900 p-5 rounded-lg border border-zinc-800">
      <p className="text-sm text-zinc-400 mb-2">{label}</p>
      <p
        className={`text-2xl font-semibold ${
          highlight ? highlight : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
    )
}