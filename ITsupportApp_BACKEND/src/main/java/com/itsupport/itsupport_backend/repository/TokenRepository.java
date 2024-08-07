package com.itsupport.itsupport_backend.repository;

import com.itsupport.itsupport_backend.model.Entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface TokenRepository extends JpaRepository<Token, Integer> {
    @Query("""
select t from Token t inner join t.user u
where t.user.id = :userId
""")
    List<Token> findAllTokensByUser(Long userId);
    Optional<Token> findByToken(String token);
}
