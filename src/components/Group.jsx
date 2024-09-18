const Group = ({ iconUrl, label }) => {
  return (
    <div className="flex items-center gap-2 py-3 px-3 bg-white  text-blue-500 border-2 border-white  shadow-slate-500 font-semibold rounded-lg">
      <img src={iconUrl} alt={`photo of ${label}`} />
      {label}
    </div>
  );
};

export default Group;
