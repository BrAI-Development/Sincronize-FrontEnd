interface AdminTableViewLayaoutProps {
    children: React.ReactNode;
  }
  
  export function AdminTableViewLayaout({ children }: AdminTableViewLayaoutProps) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Consultar Consentimientos</h1>
              <p className="mt-1 text-sm text-gray-500">
                Utilice los filtros del menú lateral para obtener información de los consentimientos registrados en el sistema
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  }