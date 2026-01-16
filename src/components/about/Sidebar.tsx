
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"

interface AboutSidebarProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function AboutSidebar({ open, onOpenChange }: AboutSidebarProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="sm:max-w-md w-full border-l border-zinc-800 bg-zinc-950 text-slate-300 shadow-2xl">
                <SheetHeader className="mb-6 text-left">
                    <SheetTitle className="text-xl font-medium tracking-wide text-slate-100">
                        Sobre o Projeto
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Informações sobre o projeto, desenvolvedores e mentores.
                    </SheetDescription>
                </SheetHeader>

                <div className="flex h-full flex-col gap-6 overflow-y-auto pb-10 pr-2">
                    {/* Project Description */}
                    <div className="rounded-lg bg-zinc-900/50 p-5 text-sm leading-relaxed text-slate-400 shadow-sm ring-1 ring-zinc-800/50">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>

                    {/* Developers */}
                    <div className="space-y-4 rounded-lg bg-zinc-900/50 p-5 shadow-sm ring-1 ring-zinc-800/50">
                        <h3 className="text-base font-medium text-slate-200">
                            Alunos Desenvolvedores:
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>- Alexandre Basílio da Silva Junior (UFCG)</li>
                            <li>- Carlos Elias Fialho de Lima (IFPB)</li>
                            <li>- Miguel Ryan Dantas de Freitas (IFPB)</li>
                            <li>- Melquisedeque Leite Silva (UFCG)</li>
                            <li>- Nicholas Gomes da Costa (UFCG)</li>
                            <li>- Pablo Daniel Nascimento Vieira (IFPB)</li>
                            <li>- Pedro Augusto Gonçalves Lucena (IFPB)</li>
                            <li>- Pedro Wilson Silva de Sousa (UFCG)</li>
                        </ul>
                    </div>

                    {/* Mentors */}
                    <div className="space-y-4 rounded-lg bg-zinc-900/50 p-5 shadow-sm ring-1 ring-zinc-800/50">
                        <h3 className="text-base font-medium text-slate-200">
                            Professores Mentores:
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>- Alexandre Sales Vasconcelos (IFPB)</li>
                            <li>- Moacy Pereira da Silva (IFPB)</li>
                            <li>- Rafael Bezerra Correia Lima (UFCG)</li>
                        </ul>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export function AboutSidebarSkeleton() {
    return (
        <div className="bg-zinc-950 flex h-full w-full flex-col gap-4 p-6 border-l border-zinc-800">
            {/* Header Skeleton */}
            <div className="mb-4 flex flex-col gap-2">
                <Skeleton className="h-8 w-40 bg-zinc-800/50" />
            </div>

            {/* Description Skeleton */}
            <div className="flex flex-col gap-2 rounded-lg bg-zinc-900/50 p-5 ring-1 ring-zinc-800/50">
                <Skeleton className="h-4 w-full bg-zinc-800/50" />
                <Skeleton className="h-4 w-[90%] bg-zinc-800/50" />
                <Skeleton className="h-4 w-[95%] bg-zinc-800/50" />
                <Skeleton className="h-4 w-[85%] bg-zinc-800/50" />
                <Skeleton className="h-4 w-full bg-zinc-800/50" />
                <Skeleton className="h-4 w-[60%] bg-zinc-800/50" />
            </div>

            {/* Developers Skeleton */}
            <div className="flex flex-col gap-3 rounded-lg bg-zinc-900/50 p-5 ring-1 ring-zinc-800/50">
                <Skeleton className="h-5 w-48 bg-zinc-800/50" />
                <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                </div>
            </div>

            {/* Mentors Skeleton */}
            <div className="flex flex-col gap-3 rounded-lg bg-zinc-900/50 p-5 ring-1 ring-zinc-800/50">
                <Skeleton className="h-5 w-48 bg-zinc-800/50" />
                <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                    <Skeleton className="h-4 w-full bg-zinc-800/50" />
                </div>
            </div>
        </div>
    )
}
