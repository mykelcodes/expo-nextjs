import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

const client = new QueryClient({})

export function AppQueryProvider({ children }: PropsWithChildren) {
    console.log('app query provider')
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
