const Card = ({ title, value, subtitle, icon, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-blue-600 flex-shrink-0">{icon}</div>}
      </div>
    </div>
  );
};

export default Card;
