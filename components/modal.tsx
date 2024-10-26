import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onPress={onOpen} style={{ backgroundColor: 'violet', color: 'white' }} variant="shadow"  >¡Empecemos!</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={setIsOpen}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">Formulario de Registro</ModalHeader>
              <ModalBody>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nombres (obligatorio) */}
                  <Input
                    label="Nombres (obligatorio)"
                    placeholder="Ingrese sus nombres"
                    required
                    variant="bordered"
                  />

                  {/* Apellidos (obligatorio) */}
                  <Input
                    label="Apellidos (obligatorio)"
                    placeholder="Ingrese sus apellidos"
                    required
                    variant="bordered"
                  />

                  {/* País (obligatorio) */}
                  <Input
                    label="País (obligatorio)"
                    placeholder="Ingrese su país"
                    required
                    variant="bordered"
                  />

                  {/* Teléfono (obligatorio) */}
                  <Input
                    label="Teléfono (obligatorio)"
                    placeholder="Ingrese su teléfono"
                    required
                    variant="bordered"
                  />

                  {/* Destino (opcional) */}
                  <Input
                    label="Destino (opcional)"
                    placeholder="Ingrese su destino"
                    variant="bordered"
                  />

                  {/* Documento (opcional) */}
                  <Input
                    label="Documento (opcional)"
                    placeholder="Ingrese el documento"
                    variant="bordered"
                  />

                  {/* Número de Documento (opcional) */}
                  <Input
                    label="Número de Documento (opcional)"
                    placeholder="Ingrese el número de documento"
                    variant="bordered"
                  />

                  {/* Correo Electrónico (obligatorio) */}
                  <Input
                    label="Correo Electrónico (obligatorio)"
                    placeholder="Ingrese su correo electrónico"
                    type="email"
                    required
                    variant="bordered"
                  />

                  {/* Fecha (opcional) */}
                  <Input
                    label="Fecha (opcional)"
                    type="date"
                    variant="bordered"
                  />

                  {/* Descripción (opcional) */}
                  <Input
                    label="Descripción (opcional)"
                    placeholder="Ingrese una descripción"
                    variant="bordered"
                  />

                  {/* Pasaporte (opcional) */}
                  <Input
                    label="Pasaporte (opcional) (JPG, PNG, SVG, WEBP)"
                    type="file"
                    variant="bordered"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
