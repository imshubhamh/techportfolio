const SectionTitle = ({ title }) => {
    return (
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="w-10 h-1 bg-primary mt-2 rounded-full" />
      </div>
    );
  };
  
  export default SectionTitle;