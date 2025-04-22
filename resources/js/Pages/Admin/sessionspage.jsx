import { PlusCircle } from "lucide-react";
import { Link, usePage, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import AdminLayout from "./adminlayout";

export default function SessionsPage({ sessions }) {
  const { props } = usePage();

  // Function to handle session cancellation
  const handleCancelSession = (sessionId) => {
    if (confirm("Are you sure you want to cancel this session?")) {
      router.delete(`/sessions/${sessionId}`, {
        onSuccess: () => {
          alert("Session cancelled successfully.");
        },
      });
    }
  };

  // Function to handle session reactivation
  const handleReactivateSession = (sessionId) => {
    if (confirm("Are you sure you want to reactivate this session?")) {
      router.patch(`/sessions/${sessionId}/reactivate`, {}, {
        onSuccess: () => {
          alert("Session reactivated successfully.");
        },
      });
    }
  };

  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Session Management</h2>
        <Link href="/sessions/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Session
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sessions</CardTitle>
          <CardDescription>
            Manage your training sessions, workshops, and events.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {/* <TableBody>
              {sessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">
                    {session.name}
                  </TableCell>
                  <TableCell>{session.date}</TableCell>
                  <TableCell>{session.duration}</TableCell>
                  <TableCell>{session.participants}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        session.status === "Active"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-gray-500 hover:bg-gray-600"
                      }
                    >
                      {session.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <Link href={`/sessions/${session.id}/edit`}>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                        </Link>
                        <Link href={`/sessions/${session.id}`}>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        {session.status === "Active" ? (
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleCancelSession(session.id)}
                          >
                            Cancel Session
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem
                            onClick={() => handleReactivateSession(session.id)}
                          >
                            Reactivate
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </CardContent>
      </Card>
    </div>
    </AdminLayout>
  );
}