import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/user';
import { useUserStore } from './state/userStore';

export default function App() {
  const { filters } = useUserStore();

  const { data } = useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  });

  return (
    <div>
      <FiltersComponent />
      {data?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

function FiltersComponent() {
  
  const { filters, setFilters } = useUserStore();

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Filter Settings</h3>
      
      
      <label>
        Limit:
        <input
          type="number"
          value={filters?.limit || 0} 
          onChange={(e) =>
            setFilters({
              ...filters, 
              limit: Number(e.target.value),
              page: filters?.page || 1, 
            })
          }
        />
      </label>

      
      <label style={{ marginLeft: '10px' }}>
        Page:
        <input
          type="number"
          value={filters?.page || 1} 
          onChange={(e) =>
            setFilters({
              ...filters, 
              page: Number(e.target.value),
              limit: filters?.limit || 10, 
            })
          }
        />
      </label>
    </div>
  );
}
