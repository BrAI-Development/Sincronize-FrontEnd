import { Github, Linkedin } from 'lucide-react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { SocialButton } from '../molecules/SocialButton';

export const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Iniciar sesión</h2>
        <p className="mt-2 text-gray-600">Ingresa tus credenciales para continuar</p>
      </div>

      <div className="flex gap-4">
        <SocialButton
          icon={<Github />}
          label="Github"
          onClick={() => {}}
        />
        <SocialButton
          icon={<Linkedin />}
          label="LinkedIn"
          onClick={() => {}}
        />
      </div>
      <clipPath id="p.0"> <path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clipRule="nonzero"/> </clipPath> <g clipPath="url(#p.0)"> <path fill="currentColor" fillOpacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z" fillRule="evenodd"/> <path fill="currentColor" d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z" fillRule="evenodd"/> <path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z" fillRule="evenodd"/> </g>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">O CONTINUA CON</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          placeholder="nombre@ejemplo.com"
          required
        />
        <Input
          type="password"
          placeholder="••••••"
          required
        />
        
        <div className="flex items-center justify-end">
          <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <Button type="submit" fullWidth>
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
}