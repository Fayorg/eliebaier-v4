"use server";

export type AddSubscriberError = "SubscriberAlreadyExists" | "UnknownError";

export async function addSubscriber(email: string, attributes: Record<string, unknown> | null = null): Promise<{sucess: boolean; err: AddSubscriberError | null}> {
    const res = await fetch(process.env.LISTMONK_API_URL + "/api/subscribers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `token ${process.env.LISTMONK_API_USER}:${process.env.LISTMONK_API_TOKEN}`,
        },
        body: JSON.stringify({
            email,
            name: "",
            status: "enabled",
            lists: [parseInt(process.env.LISTMONK_LIST_ID!)],
            preconfirm_subscriptions: true,
            attribs: attributes ? attributes : "",
        }),
    });

    // Handle specific case where email is already subscribed
    if(res.status === 409) {
        return { sucess: false, err: "SubscriberAlreadyExists" };
    }

    if (!res.ok) {
        console.error("Failed to add subscriber (" + email + "):", res.statusText);
        return { sucess: false, err: "UnknownError" };
    }

    return { sucess: true, err: null };
}