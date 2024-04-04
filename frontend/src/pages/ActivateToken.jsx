import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getActivationTaken } from '../@apis/auth';

function ActivateToken() {
  const {activation_token} =   useParams()
  const { isPending, data, error, refetch } = useQuery({
    queryKey: ["activation", activation_token],
    queryFn: getActivationTaken(activation_token),
  });

  useEffect(() => {
    // Trigger data refetch when the component mounts
    // getJobList();
    refetch();
  }, [activation_token]);

  return (
    <div>ActivateToken</div>
  )
}

export default ActivateToken