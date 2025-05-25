export default function SkillCard({ Icon, name, level }) {
  return (
    <div className="h-40 w-40 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300  flex items-center justify-center mt-6 flex-col space-y-4">
      <Icon className="text-indigo-600 text-4xl" />
      <div className="text-center flex flex-col gap-1">
        <h1 className="text-gray-800 font-semibold text-lg">{name}</h1>
        <p className="text-gray-500 text-sm">{level}</p>
      </div>
    </div>
  );
}
