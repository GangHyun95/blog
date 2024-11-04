# 커스텀 훅의 문제점과 React Query의 장점

리액트에서 커스텀 훅을 사용하면 동일한 로직을 여러 컴포넌트에서 재사용할 수 있습니다. 하지만, 이 커스텀 훅은 **로직의 재사용**을 목적으로 만들어진 것이지, **데이터의 재사용**이나 **상태의 공유**를 위한 것이 아닙니다. 이로 인해 발생하는 몇 가지 문제점이 있습니다.

## 커스텀 훅의 문제점

- 커스텀 훅을 호출할 때마다 새로운 네트워크 요청이 발생하며, 받아온 데이터를 별도로 캐싱하지 않습니다. 즉, 동일한 데이터를 요청하는 컴포넌트들이 있어도 각 컴포넌트는 개별적으로 데이터를 가져오게 됩니다. 이는 **불필요한 네트워크 트래픽**을 증가시키고, **성능 저하**로 이어질 수 있습니다.
- 커스텀 훅은 호출하는 컴포넌트마다 독립적인 상태를 생성합니다. 이로 인해 여러 컴포넌트에서 **동일한 상태를 공유하거나 재사용하기 어렵습니다**.
- 커스텀 훅에는 네트워크 요청 실패 시 **자동으로 재시도하거나**, 요청의 진행 상태나 오류 발생 여부를 손쉽게 관리할 수 있는 기능이 부족합니다. 이러한 기능이 필요하다면 별도로 구현해야 하며, 이는 **코드의 복잡성을 증가**시킵니다.

### 예시: useFetchData 커스텀 훅

```javascript
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('네트워크 응답이 정상적이지 않습니다');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
```
위의 useFetchData 훅은 네트워크 요청을 수행하고 데이터를 반환하지만, 이 훅을 여러 컴포넌트에서 사용하면 각 컴포넌트마다 개별적으로 네트워크 요청이 발생하게 됩니다. 
데이터가 캐싱되지 않기 때문에 동일한 URL로 여러 컴포넌트가 호출될 때도 각각 네트워크 요청이 이루어집니다.

## React Query의 장점
React Query는 이러한 커스텀 훅의 문제를 해결해줍니다. 주요 장점으로는 다음과 같습니다.

데이터 캐싱: 동일한 네트워크 요청에 대해 데이터를 메모리에 캐싱하여, 필요 시 이를 재사용할 수 있습니다. 캐시된 데이터는 설정한 시간 동안 유지되며, 이를 통해 불필요한 네트워크 요청을 줄일 수 있습니다.
글로벌 상태 관리: React Query는 글로벌하게 상태를 관리할 수 있어, 여러 컴포넌트에서 동일한 데이터를 공유하고, 상태를 일관되게 유지할 수 있습니다.
네트워크 요청 관리: 요청이 실패했을 때 자동으로 재시도하는 기능, 요청의 진행 상태나 오류 발생 여부를 쉽게 확인할 수 있는 기능을 제공합니다. 이를 통해 네트워크 통신의 안정성과 사용자 경험을 크게 향상시킬 수 있습니다.

## React Query 기본 사용법
1. React Query 설치
먼저 React Query를 설치해야 합니다. 아래 명령어 중 하나를 사용하여 프로젝트에 React Query를 추가할 수 있습니다.
```bash
npm i @tanstack/react-query
# 또는
pnpm add @tanstack/react-query
# 또는
yarn add @tanstack/react-query
# 또는
bun add @tanstack/react-query
```

2. 기본 설정
React Query를 사용하기 위해서는 QueryClient와 QueryClientProvider를 설정해주어야 합니다.

이를 통해 애플리케이션 전반에 걸쳐 React Query를 사용할 수 있게 됩니다.
```javascript
import React from "react";
import "./App.css";
import MainProjects from "./components/MainProjects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainProjects />
        </QueryClientProvider>
    );
}
```
위 코드에서는 QueryClient를 생성하고, QueryClientProvider로 애플리케이션을 감싸서 React Query를 사용할 준비를 합니다.
3. React Query 사용법
이제 React Query를 사용하여 데이터를 페칭하는 방법을 알아보겠습니다.

useQuery 훅을 사용하여 데이터를 가져오고, 로딩 상태, 에러 상태, 그리고 데이터를 쉽게 관리할 수 있습니다.

기존의 useFetchData 커스텀 훅 대신 React Query를 사용한 버전으로, 데이터를 효율적으로 관리할 수 있습니다.
```jsx
// MainProducts.tsx
import React from "react";
import Projects from "./Projects";

export default function MainProjects() {
    return (
        <div>
            <h1>프로젝트 목록</h1>
            <Projects />
        </div>
    );
}
```
```jsx
// Projects.tsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Project {
    id: number;
    name: string;
    isActive: boolean;
}

export default function Projects() {
    const [showActiveOnly, setShowActiveOnly] = useState(false);

    const { isLoading, error, data: projects } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            console.log("데이터를 가져오는 중...");
            const response = await fetch('/data/projects.json');
            if (!response.ok) {
                throw new Error('네트워크 응답이 정상적이지 않습니다');
            }
            return response.json();
        },
    });

    const handleChange = () => setShowActiveOnly((prev) => !prev);

    if (isLoading) return <p>데이터를 불러오는 중입니다...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    const filteredProjects = showActiveOnly
        ? projects?.filter((project: Project) => project.isActive)
        : projects;

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={showActiveOnly}
                    onChange={handleChange}
                />
                활성 프로젝트만 보기
            </label>
            <ul>
                {filteredProjects?.map((project: Project) => (
                    <li key={project.id}>
                        <article>
                            <h3>{project.name}</h3>
                            {project.isActive ? <span>🟢 활성</span> : <span>🔴 비활성</span>}
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}
```
4. React Query의 키 개념
useQuery 훅에서 첫 번째 인자로 queryKey를 전달합니다. 이 키는 고유한 값이어야 하며, 데이터의 캐싱과 관리에 사용됩니다.

두 번째 인자로는 데이터를 페칭하는 함수를 정의합니다. 이 함수는 useQuery가 호출될 때 실행되어 반환된 데이터를 React Query가 내부적으로 관리하게 됩니다.

React Query는 네트워크 요청마다 고유한 키를 할당합니다.

예를 들어, projects라는 키로 데이터를 요청하면 React Query는 이 데이터를 메모리에 캐싱합니다. 이후 다른 컴포넌트에서 동일한 키를 사용하여 데이터를 요청할 때, 이미 캐싱된 데이터가 있다면 네트워크 요청을 새로 하지 않고 캐싱된 데이터를 반환합니다.

이렇게 하면 네트워크 요청을 최소화하고 성능을 최적화할 수 있습니다.