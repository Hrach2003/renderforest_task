export const Item = ({ children, color, ...props }) => {
  return (
    <div className="relative flex items-center">
      <i
        className={`fas fa-chevron-circle-right absolute left-0 ml-3 ${color}`}
      ></i>
      <input
        {...props}
        className="outline-none shadow-2xl focus:shadow-outline w-full my-2 py-2 pl-8 pr-4 rounded-full"
        type="text"
      />
    </div>
  );
};
