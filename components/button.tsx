import { Button } from "@nextui-org/react";

export default function ButtonComponent() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button
        style={{ backgroundColor: 'violet', color: 'white' }} // Ajusta el color del texto según sea necesario
        variant="shadow"
      >
        ¡Empieza ahora!
      </Button>
    </div>
  );
}
