function RowsCourse(props: any) {
  return (
    <tbody>
      {props.items.map((data: any, index: number) => {
        return (
          <tr
            key={index}
            className={`whitespace-nowrap text-[#343434] ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#D9D9D9]'
            }`}
          >
            <td className="">{data.subject}</td>
            <td>{data.title}</td>
            <td>{data.classroom}</td>
            <td>{data.schedule}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default RowsCourse;
