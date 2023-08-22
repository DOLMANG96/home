package com.fornula.domain.member.join;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fornula.domain.member.dto.Interest;
import com.fornula.domain.member.dto.Member;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MemberJoinRepositoryImpl implements MemberJoinRepository {

	private final SqlSession sqlSession;
		
	@Override
	public int join(MemberDTO memberDTO) throws Exception {
		return sqlSession.getMapper(MemberJoinMapper.class).memberJoin(memberDTO);
	}
	
}
