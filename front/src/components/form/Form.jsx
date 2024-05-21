import { useAuth0 } from '@auth0/auth0-react';

const Form = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    // Invocar la función de Auth0 para redirigir al flujo de inicio de sesión
    loginWithRedirect();
  };

  return (
    <div>
      {/* Otros elementos del formulario si los hay */}
      <button onClick={handleLogin}>Iniciar sesión con Auth0</button>
    </div>
  );
};

export default Form;
