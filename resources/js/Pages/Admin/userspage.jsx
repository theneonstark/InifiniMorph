import { PlusCircle } from "lucide-react";
import { Link, useForm} from "@inertiajs/react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminLayout from "./adminlayout";
import { useState } from "react";
import { store } from "@/lib/Apis";

export default function UserPage({ members }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  // Form handling with Inertia
  const { data, setData, processing, errors, reset } = useForm({
    name: "",
    email: "",
    des: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      let res;

    if (currentMember) {
      res = await store({ ...data, id: currentMember.id });
    } else {
      res = await store(data);
    }
    
    if (res.data.status === "success") {
      setIsOpen(false);
      reset();
      setCurrentMember(null);
    }
    
    }catch(err){
      console.log('Error',err)
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    reset();
    setCurrentMember(null);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this member?")) {
      router.delete(route("members.destroy", id));
    }
  };

  // const handlePublish = (id) => {
  //   router.patch(route("members.publish", id), { status: "Published" });
  // };

  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Admin Management</h2>
          <Button onClick={() => setIsOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Member
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>Manage your members.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.id}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.designation}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          member.status === 1
                            ? "bg-green-500 hover:bg-green-600"
                            : member.status === 0
                            ? "bg-amber-500 hover:bg-amber-600"
                            : "bg-gray-500 hover:bg-gray-600"
                        }
                        variant={member.status === 1 ? "secondary" : "default"}
                      >
                        {member.status === 1 ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {member.created_at || "-"}
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
                            <DropdownMenuItem onClick={() => {
                                    setCurrentMember(member);
                                    setData({
                                      name: member.name,
                                      email: member.email,
                                      des: member.designation,
                                      password: "", // Optional: password usually shouldn't be editable like this
                                    });
                                    setIsOpen(true);
                                  }}>Edit</DropdownMenuItem>
                          <Link href={'ada'}>
                            <DropdownMenuItem>View</DropdownMenuItem>
                          </Link>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDelete(member.id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Popup Form for Creating New Member */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Member</DialogTitle>
            <DialogDescription>
              Add a new member to your admin panel.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                placeholder="Enter member Name"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="Enter member Email"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.des}</p>}
            </div>
            <div>
              <Label htmlFor="des">Designation</Label>
              <Input
                id="des"
                value={data.des}
                onChange={(e) => setData("des", e.target.value)}
                placeholder="Enter member Designation"
              />
              {errors.des && <p className="text-red-600 text-sm">{errors.des}</p>}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                placeholder="Enter member Password"
              />
              {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={processing}>
                Create Member
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}