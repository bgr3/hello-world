SELECT 	manager_id,  array_agg (concat('',name, ' (',id , ')') order by id) as employee_names FROM employees
WHERE manager_id >= 1
GROUP BY manager_id
ORDER BY manager_id;

