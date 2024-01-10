"use client";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";
export default function DeleteBtn() {
	const router = useRouter();
	const { id } = useParams();

	const [loading, setLoading] = useState(false);

	async function deleteTicket() {
		setLoading(true);
		const res = await fetch(`http://localhost:4000/tickets/${id}`, {
			method: "DELETE", // Use DELETE method for deletion
			headers: { "Content-Type": "application/json" },
		});
		if (res.status === 200) {
			router.push("/tickets");
			router.refresh();
		} else {
			window.alert("error deleting the ticket please try again later");
		}
		setLoading(false);
	}

	return (
		<button
			onClick={(e) => deleteTicket()}
			className="bg-red-500 text-white hover:bg-red-600 font-bold rounded"
			disabled={loading}
		>
			{loading && <span>Deleting Ticket</span>}
			{!loading && <span>Delete Ticket</span>}
		</button>
	);
}
