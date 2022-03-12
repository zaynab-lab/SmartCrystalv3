const services = [
  { name: "Web development", icon: "" },
  { name: "System development", icon: "" },
  { name: "Application development", icon: "" },
  { name: "Artificial Intelligence", icon: "" },
  { name: "Graphic Design", icon: "" },
  { name: "Digital Marketing", icon: "" },
  { name: "Business Management", icon: "" },
  { name: "Data Science", icon: "" }
];

export default function ServicesHive() {
  return (
    <>
      <div>
        {services.map((service) => (
          <>
            <div>{service.icon}</div>
            <div>{service.name}</div>
          </>
        ))}
      </div>
    </>
  );
}
